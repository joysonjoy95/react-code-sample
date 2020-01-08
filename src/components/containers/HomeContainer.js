import React from 'react';

const HomeContainer = props => {
        return (
            <div id="#home-container" className="col-md-7">
                <div className="p-5">
                    <h2 className="mt-4 mb-4">{props.title}</h2>
                    {props.children}
                </div>
            </div>
        );
}

export default HomeContainer;