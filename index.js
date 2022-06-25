const authorizeIcons = (system) => {
  const React = system.React
  return {
    wrapComponents: {
      SvgAssets: (original) => (props) => {
        const originalIco = original().props.children.props.children.props.children
        const ico1 = React.createElement('symbol', {viewBox: '0 0 512 512', id: 'unlocked-key'},
          React.createElement('path', {d: 'M282.3 343.7L248.1 376.1C244.5 381.5 238.4 384 232 384H192V424C192 437.3 181.3 448 168 448H128V488C128 501.3 117.3 512 104 512H24C10.75 512 0 501.3 0 488V408C0 401.6 2.529 395.5 7.029 391L168.3 229.7C162.9 212.8 160 194.7 160 176C160 78.8 238.8 0 336 0C433.2 0 512 78.8 512 176C512 273.2 433.2 352 336 352C317.3 352 299.2 349.1 282.3 343.7zM376 176C398.1 176 416 158.1 416 136C416 113.9 398.1 96 376 96C353.9 96 336 113.9 336 136C336 158.1 353.9 176 376 176z'})
        )
        return React.createElement('div', null,
          React.createElement('svg', {xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', className: 'svg-assets'},
            React.createElement('defs', null, [ico1, ...originalIco])
          )
        )
      },
      authorizeBtn: () => (props) => {
        const { isAuthorized, showPopup, onClick, getComponent } = props
        const AuthorizationPopup = getComponent('authorizationPopup', true)
        return React.createElement('div', {className: 'auth-wrapper'},
          [
            React.createElement('button', {className: isAuthorized ? 'btn authorize unlocked' : 'btn authorize locked', onClick},
              [
                React.createElement('span', null, 'Authorize'),
                React.createElement('svg', {width:'20', height: '20'},
                  React.createElement('use', {href: isAuthorized ? '#unlocked' : '#locked', xlinkHref: isAuthorized ? '#unlocked' : '#locked'})
                )
              ]
            )
          ],
          showPopup && React.createElement(AuthorizationPopup)
        )
      },
      authorizeOperationBtn: () => (props) => {
        const { isAuthorized, onClick } = props
        return React.createElement('button', {className: isAuthorized ? 'authorization__btn unlocked' : 'authorization__btn locked', onClick},
          React.createElement('svg', {width:'20', height: '20'},
            React.createElement('use', {href: isAuthorized ? '#unlocked-key' : '#locked', xlinkHref: isAuthorized ? '#unlocked-key' : '#locked'})
          )
        )
      }
    }
  }
}
