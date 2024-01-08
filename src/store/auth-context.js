import React, {useState, useEffect} from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogIn: (email, collegeName, password) => {},
    onLogOut: () => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storeLoggedInUserInformation = localStorage.getItem('isLoggedIn');
        if(storeLoggedInUserInformation === '1'){
          setIsLoggedIn(true);
        }
      }, []);

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider
          value={{
            isLoggedIn: isLoggedIn,
            onLogOut: logoutHandler,
            onLogIn: loginHandler,
          }}
        >
          {props.children}
        </AuthContext.Provider>
      );
}

export default AuthContext;