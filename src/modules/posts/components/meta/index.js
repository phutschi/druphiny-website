// @flow

import * as React from 'react';
import format from 'comma-number';

type Props = {
  views: number,
  date?: string,
};

type State = {
  highlight: boolean,
};

class Meta extends React.Component<Props, State> {
  constructor( props: Props ) {
    super( props );

    this.state = { highlight : false };
  }

  componentWillReceiveProps( nextProps: Props ) {
    if ( this.props.views !== nextProps.views ) {
      if ( this.raf ) return;
      if ( this.state.highlight ) {
        // reset the animation
        this.setState( { highlight : false }, () => {
          this.raf = requestAnimationFrame( () => {
            this.raf = null;
            this.setState( { highlight : true } );
          } );
        } );
      } else {
        this.setState( { highlight : true } );
      }
    }
  }

  raf: any;

  render() {
    const { date, views } = this.props;
    const { highlight } = this.state;

    return (
      <div>
        {date} – {' '}
        {
          <span className={highlight && 'highlight'}>
            {format( views )} views
          </span>
        }
        <style jsx>{`
          div {
            margin-bottom: 20px;
            color: #777;
          }

          .highlight {
            animation-name: highlight;
            animation-duration: 1s;
            animation-fill-mode: forwards;
          }

          @keyframes highlight {
            from {
              background-color: yellow;
            }
            to {
              background-color: #fff;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Meta;
