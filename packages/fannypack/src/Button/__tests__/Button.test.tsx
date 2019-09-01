import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Box } from '../../Box';
import { Button } from '../Button';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Button>Hello world</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should assign a ref', () => {
    const ref = React.createRef();
    render(<Button ref={ref}>Hello world</Button>);
    expect(ref.current).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Button backgroundColor="red" color="white">
        Hello world
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('disabled', () => {
    it('should render a disabled button correctly', () => {
      const { container } = render(<Button disabled>Hello world</Button>);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should render a disabled focusable button correctly', () => {
      const { container } = render(
        <Button disabled focusable>
          Hello world
        </Button>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should render correctly with overrides', () => {
      const { container } = render(
        <Button disabled overrides={{ Button: { disabled: { backgroundColor: 'red' } } }}>
          Hello world
        </Button>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('iconBefore', () => {
    it('should render a button with an icon correctly', () => {
      const { container } = render(<Button iconBefore="info-circle">Hello world</Button>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('iconAfter', () => {
    it('should render a button with an icon correctly', () => {
      const { container } = render(<Button iconAfter="info-circle">Hello world</Button>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('isLoading', () => {
    it('should render a loading button correctly', () => {
      const { container } = render(<Button isLoading>Hello world</Button>);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should render correctly with overrides', () => {
      const { container } = render(
        <Button isLoading overrides={{ Button: { loading: { backgroundColor: 'red' } } }}>
          Hello world
        </Button>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('isStatic', () => {
    it('should render a static button correctly', () => {
      const { container } = render(<Button isStatic>Hello world</Button>);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should render correctly with overrides', () => {
      const { container } = render(
        <Button isStatic overrides={{ Button: { static: { backgroundColor: 'red' } } }}>
          Hello world
        </Button>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('kind', () => {
    ['outlined', 'ghost', 'link'].forEach((kind: any) => {
      it(`should render a ${kind} button correctly`, () => {
        const { container } = render(<Button kind={kind}>Hello world</Button>);
        expect(container.firstChild).toMatchSnapshot();
      });

      it('should render correctly with overrides', () => {
        const { container } = render(
          <Button kind={kind} overrides={{ Button: { [kind]: { backgroundColor: 'red' } } }}>
            Hello world
          </Button>
        );
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });

  describe('palette', () => {
    ['primary', 'secondary', 'danger', 'warning', 'info', 'success'].forEach((palette: any) => {
      it(`should render a ${palette} button correctly`, () => {
        const { container } = render(<Button palette={palette}>Hello world</Button>);
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });

  describe('size', () => {
    ['small', 'default', 'medium', 'large'].forEach((size: any) => {
      it(`should render a ${size} button correctly`, () => {
        const { container } = render(<Button size={size}>Hello world</Button>);
        expect(container.firstChild).toMatchSnapshot();
      });

      it('should render correctly with overrides', () => {
        const { container } = render(
          <Button size={size} overrides={{ Button: { sizes: { [size]: { backgroundColor: 'red' } } } }}>
            Hello world
          </Button>
        );
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });

  describe('type', () => {
    ['submit', 'button', 'reset'].forEach((type: any) => {
      it(`should render a ${type} button correctly`, () => {
        const { container } = render(<Button type={type}>Hello world</Button>);
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Button use={Box}>Hello world</Button>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Button props', () => {
      const { result } = renderHook(() => Button.useProps({}));
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Button>{ButtonProps => <div {...ButtonProps}>Hello world</div>}</Button>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Button.base should render correctly', () => {
    const { container } = render(
      <Button overrides={{ Button: { base: { backgroundColor: 'red' }, disabled: { backgroundColor: 'red' } } }}>
        hello world
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Button.disabled should render correctly', () => {
    const { container } = render(
      <Button disabled overrides={{ Button: { disabled: { backgroundColor: 'red' } } }}>
        hello world
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Button.focus should render correctly', () => {
    const { container } = render(
      <Button overrides={{ Button: { focus: { backgroundColor: 'red' } } }}>hello world</Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Button.ghost should render correctly', () => {
    const { container } = render(
      <Button kind="ghost" overrides={{ Button: { ghost: { backgroundColor: 'red' } } }}>
        hello world
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Button.hover should render correctly', () => {
    const { container } = render(
      <Button overrides={{ Button: { hover: { backgroundColor: 'red' } } }}>hello world</Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Button.hoveractive should render correctly', () => {
    const { container } = render(
      <Button overrides={{ Button: { hoveractive: { backgroundColor: 'red' } } }}>hello world</Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Button.loading should render correctly', () => {
    const { container } = render(
      <Button isLoading overrides={{ Button: { loading: { backgroundColor: 'red' } } }}>
        hello world
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Button.link should render correctly', () => {
    const { container } = render(
      <Button kind="link" overrides={{ Button: { link: { backgroundColor: 'red' } } }}>
        hello world
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Button.outlined should render correctly', () => {
    const { container } = render(
      <Button kind="outlined" overrides={{ Button: { outlined: { backgroundColor: 'red' } } }}>
        hello world
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Button.static should render correctly', () => {
    const { container } = render(
      <Button isStatic overrides={{ Button: { outlined: { backgroundColor: 'red' } } }}>
        hello world
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  ['small', 'default', 'medium', 'large'].forEach((size: any) => {
    it(`Button.sizes.${size} should render correctly`, () => {
      const { container } = render(
        <Button size={size} overrides={{ Button: { sizes: { [size]: { backgroundColor: 'red' } } } }}>
          hello world
        </Button>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Button.base should render correctly', () => {
    const { container } = render(<Button>hello world</Button>, {
      theme: { Button: { base: { backgroundColor: 'red' }, disabled: { backgroundColor: 'red' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Button.disabled should render correctly', () => {
    const { container } = render(<Button disabled>hello world</Button>, {
      theme: { Button: { disabled: { backgroundColor: 'red' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Button.focus should render correctly', () => {
    const { container } = render(<Button>hello world</Button>, {
      theme: { Button: { focus: { backgroundColor: 'red' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Button.ghost should render correctly', () => {
    const { container } = render(<Button kind="ghost">hello world</Button>, {
      theme: { Button: { ghost: { backgroundColor: 'red' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Button.hover should render correctly', () => {
    const { container } = render(<Button>hello world</Button>, {
      theme: { Button: { hover: { backgroundColor: 'red' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Button.hoveractive should render correctly', () => {
    const { container } = render(<Button>hello world</Button>, {
      theme: { Button: { hoveractive: { backgroundColor: 'red' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Button.loading should render correctly', () => {
    const { container } = render(<Button isLoading>hello world</Button>, {
      theme: { Button: { loading: { backgroundColor: 'red' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Button.link should render correctly', () => {
    const { container } = render(<Button kind="link">hello world</Button>, {
      theme: { Button: { link: { backgroundColor: 'red' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Button.outlined should render correctly', () => {
    const { container } = render(<Button kind="outlined">hello world</Button>, {
      theme: { Button: { outlined: { backgroundColor: 'red' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Button.static should render correctly', () => {
    const { container } = render(<Button isStatic>hello world</Button>, {
      theme: { Button: { outlined: { backgroundColor: 'red' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  ['small', 'default', 'medium', 'large'].forEach((size: any) => {
    it(`Button.sizes.${size} should render correctly`, () => {
      const { container } = render(<Button size={size}>hello world</Button>, {
        theme: { Button: { sizes: { [size]: { backgroundColor: 'red' } } } }
      });
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('defaultProps', () => {
  it('should render correctly', () => {
    const { container } = render(<Button>hello world</Button>, {
      theme: { Button: { defaultProps: { palette: 'primary', size: 'medium' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});