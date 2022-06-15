import React from "react";
import { Link } from 'react-router-dom';

export function SkipMemu() {
    return (
        <div className="skip-menu">
          <div className="container">
            <Link to="/"><span>Main</span></Link>
            <Link to="/shop"><span>Shop</span></Link>
          </div>
        </div>
    );
}

export default SkipMemu;