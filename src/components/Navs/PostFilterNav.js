import React, { useState } from 'react';

function PostFilterNav({ handleFilterKeyChange }) {
    const [selectedFilter, setSelectedFilter] = useState('*');

    const handleFilterSelect = (event, filter) => {
        event.preventDefault();
        setSelectedFilter(filter);
    };

    return (
        <ul className="filter filter-list filter-7bddf04">
            <li>
                <a
                    href="/#"
                    data-filter="*"
                    className={selectedFilter === '*' ? 'selected' : ''}
                    onClick={(e) => {
                        handleFilterKeyChange('*')();
                        handleFilterSelect(e, '*');
                    }}
                >
                    All
                </a>
            </li>
            <li>
                <a
                    href="/#"
                    data-filter=".company"
                    className={selectedFilter === '.company' ? 'selected' : ''}
                    onClick={(e) => {
                        handleFilterKeyChange('Company')(); // Call the handleFilterKeyChange function with "*" as the argument
                        handleFilterSelect(e, 'Company');
                    }}
                >
                    Company
                </a>
            </li>
            <li>
                <a
                    href="/#"
                    data-filter=".design"
                    className={selectedFilter === '.design' ? 'selected' : ''}
                    onClick={(e) => {
                        handleFilterKeyChange('Design')(); // Call the handleFilterKeyChange function with "*" as the argument
                        handleFilterSelect(e, 'Design');
                    }}
                >
                    Design
                </a>
            </li>
            <li>
                <a
                    href="/#"
                    data-filter=".development"
                    className={
                        selectedFilter === '.development' ? 'selected' : ''
                    }
                    onClick={(e) => {
                        handleFilterKeyChange('Development')(); // Call the handleFilterKeyChange function with "*" as the argument
                        handleFilterSelect(e, 'Development');
                    }}
                >
                    Development
                </a>
            </li>
            <li>
                <a
                    href="/#"
                    data-filter=".technology"
                    className={
                        selectedFilter === '.technology' ? 'selected' : ''
                    }
                    onClick={(e) => {
                        handleFilterKeyChange('Technology')(); // Call the handleFilterKeyChange function with "*" as the argument
                        handleFilterSelect(e, 'Technology');
                    }}
                >
                    Technology
                </a>
            </li>
        </ul>
    );
}

export default PostFilterNav;
