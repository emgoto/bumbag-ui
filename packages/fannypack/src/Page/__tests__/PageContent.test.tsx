import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { PageContent } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<PageContent>Hello world</PageContent>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<PageContent color="primary">Hello world</PageContent>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('variants', () => {
  it('css.root should render correctly', () => {
    const { container } = render(<PageContent variant="test">hello world</PageContent>, {
      theme: {
        PageContent: {
          variants: { test: { css: { root: { backgroundColor: 'red' } } } }
        }
      }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('css.root should render correctly', () => {
    const { container } = render(
      <PageContent
        overrides={{
          PageContent: { css: { root: { backgroundColor: 'red' } } }
        }}
      >
        hello world
      </PageContent>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('css.root should render correctly', () => {
    const { container } = render(<PageContent>hello world</PageContent>, {
      theme: {
        PageContent: { css: { root: { backgroundColor: 'red' } } }
      }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<PageContent>hello world</PageContent>, {
      theme: {
        PageContent: { defaultProps: { className: 'test', color: 'primary' } }
      }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
