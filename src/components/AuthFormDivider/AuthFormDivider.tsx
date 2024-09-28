import React from 'react';

const AuthFormDivider = () => {
  return (
    <div className="flex items-center w-full">
      <hr className="border-t border-auth-divider w-full"/>
      <span className="mx-2 text-xs text-nav-sub-menu-heading-text">
          OR
      </span>
      <hr className="border-t border-auth-divider w-full"/>
    </div>
  );
};

export default AuthFormDivider;