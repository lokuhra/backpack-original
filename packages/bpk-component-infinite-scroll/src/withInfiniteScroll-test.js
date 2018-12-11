/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2018 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import withInfiniteScroll from './withInfiniteScroll';
import { ArrayDataSource } from './DataSource';

describe('withInfiniteScroll', () => {
  const elementsArray = [];

  for (let i = 0; i < 5; i += 1) {
    elementsArray.push(`Element ${i}`);
  }

  const List = props => (
    <div id="list">
      {props.elements.map(element => <div key={element}>{element}</div>)}
    </div>
  );

  List.propTypes = {
    elements: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.number),
    ]).isRequired,
  };

  const InfiniteList = withInfiniteScroll(List);
  let intersect;

  beforeEach(() => {
    global.IntersectionObserver = class {
      constructor(callback) {
        intersect = async () => callback([{ isIntersecting: true }]);
      }
      observe() {} // eslint-disable-line
      unobserve() {} // eslint-disable-line
    };
  });

  it('renders an empty list for the first render', () => {
    const tree = renderer.create(
      <InfiniteList dataSource={new ArrayDataSource(elementsArray)} />,
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders items after the first render', async () => {
    const tree = mount(
      <InfiniteList dataSource={new ArrayDataSource(elementsArray)} />,
    );

    await intersect();
    tree.update();

    expect(toJson(tree)).toMatchSnapshot();
  });

  it('renders correctly with different initial and onScroll numbers', () => {
    const tree = mount(
      <InfiniteList
        dataSource={new ArrayDataSource(elementsArray)}
        initiallyLoadedElements={3}
        elementsPerScroll={2}
      />,
    );
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('should render correctly when no more elements', async () => {
    const tree = mount(
      <InfiniteList dataSource={new ArrayDataSource(elementsArray)} />,
    );

    await intersect();
    tree.update();
    await intersect();
    tree.update();

    expect(toJson(tree)).toMatchSnapshot();
  });

  it('should render correctly with an "elementsPerScroll" attribute', async () => {
    const tree = mount(
      <InfiniteList
        dataSource={new ArrayDataSource(elementsArray)}
        elementsPerScroll={1}
      />,
    );

    await intersect();
    tree.update();

    expect(toJson(tree)).toMatchSnapshot();
  });

  it('should render correctly with a "renderSeeMoreComponent" attribute', async () => {
    const tree = mount(
      <InfiniteList
        dataSource={new ArrayDataSource(elementsArray)}
        elementsPerScroll={1}
        renderSeeMoreComponent={({ onSeeMoreClick }) => (
          <button type="button" onClick={onSeeMoreClick}>
            see more
          </button>
        )}
        seeMoreAfter={0}
      />,
    );

    await intersect();
    tree.update();

    expect(toJson(tree)).toMatchSnapshot();
  });

  it('should render correctly with a "renderLoadingComponent" attribute', () => {
    const tree = mount(
      <InfiniteList
        dataSource={new ArrayDataSource(elementsArray)}
        renderLoadingComponent={() => <span>Loading</span>}
      />,
    );

    expect(toJson(tree)).toMatchSnapshot();
  });

  it('should pass extra props to the decorated component', () => {
    const tree = mount(
      <InfiniteList
        dataSource={new ArrayDataSource(elementsArray)}
        aria-label="Test"
      />,
    );

    expect(toJson(tree)).toMatchSnapshot();
  });

  it('should call onScroll on intersection fired', async () => {
    const spy = jest.fn();
    mount(
      <InfiniteList
        dataSource={new ArrayDataSource(elementsArray)}
        onScroll={spy}
      />,
    );

    await intersect();

    expect(spy).toHaveBeenCalledWith({
      currentIndex: 0,
    });
  });

  it('should call onScrollFinished when no more elements to render', async () => {
    const spy = jest.fn();
    mount(
      <InfiniteList
        dataSource={new ArrayDataSource([1, 2])}
        onScrollFinished={spy}
        elementsPerScroll={2}
      />,
    );

    await intersect();
    await intersect();

    expect(spy).toHaveBeenCalledWith({
      totalNumberElements: 2,
    });
  });

  it('should fetch more items when see more is clicked', async () => {
    const myDs = new ArrayDataSource(elementsArray);

    const mockFetch = myDs.fetchItems.bind(myDs);
    myDs.fetchItems = jest.fn((...args) => mockFetch(...args));

    const tree = mount(
      <InfiniteList
        dataSource={myDs}
        elementsPerScroll={1}
        renderSeeMoreComponent={({ onSeeMoreClick }) => (
          <button type="button" id="test-button" onClick={onSeeMoreClick}>
            see more
          </button>
        )}
        seeMoreAfter={0}
      />,
    );

    await intersect();
    tree.update();

    const button = tree.find('#test-button');
    button.simulate('click');
    expect(myDs.fetchItems).toHaveBeenCalledTimes(3);
  });

  it('should refresh data when data changes', async () => {
    const myDs = new ArrayDataSource(elementsArray);

    const mockFetch = myDs.fetchItems.bind(myDs);
    myDs.fetchItems = jest.fn((...args) => mockFetch(...args));

    const tree = mount(<InfiniteList dataSource={myDs} />);

    expect(toJson(tree)).toMatchSnapshot();
    myDs.updateData([1, 2, 3]);
    tree.update();

    expect(myDs.fetchItems).toHaveBeenCalledTimes(2);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
