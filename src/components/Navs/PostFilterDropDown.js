import React, { useEffect, useState, useRef } from 'react';
import $ from 'jquery';
import OverlayScrollbars from 'overlayscrollbars';
import 'bootstrap-select';

function PostFilterDropDown({ handleFilterKeyChange }) {
    const [selectedFilter, setSelectedFilter] = useState('*');

    const handleFilterSelect = (filter) => {
        setSelectedFilter(filter);
    };

    useEffect(() => {
        const selects = document.querySelectorAll('select');

        selects.forEach((select) => {
            const instance = OverlayScrollbars(select.nextElementSibling, {
                className: 'select-os',
                scrollbars: {
                    visibility: 'auto',
                    autoHide: 'never',
                    autoHideDelay: 800,
                    dragScrolling: true,
                    clickScrolling: true,
                    touchSupport: true,
                    snapHandle: false,
                },
            });
        });
    }, []);

    const selectRef = useRef(null);

    useEffect(() => {
        $('.select-picker').selectpicker();

        const handleSelectRendered = () => {
            const item = $('.bootstrap-select .dropdown-menu:not(.inner)');
            if (!item.length) return;
            OverlayScrollbars(item[0], {
                className: 'select-os',
                scrollbars: {
                    visibility: 'auto',
                    autoHide: 'never',
                    autoHideDelay: 800,
                    dragScrolling: true,
                    clickScrolling: true,
                    touchSupport: true,
                    snapHandle: false,
                },
            });
        };

        handleSelectRendered();

        $('select').on('rendered.bs.select', handleSelectRendered);

        return () => {
            $('select').off('rendered.bs.select', handleSelectRendered);
        };
    }, []);

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);

        // Execute the desired function based on the selected option
        if (selectedValue === '*') {
            handleFilterKeyChange('*')();
            handleFilterSelect('*');
        } else if (selectedValue === 'design') {
            handleFilterKeyChange('Design')();
            handleFilterSelect('Design');
        } else if (selectedValue === 'development') {
            handleFilterKeyChange('Development')();
            handleFilterSelect('Development');
        } else if (selectedValue === 'technology') {
            handleFilterKeyChange('Technology')();
            handleFilterSelect('Technology');
        } else if (selectedValue === 'company') {
            handleFilterKeyChange('Company')();
            handleFilterSelect('Company');
        }
    };

    return (
        <>
            <div className="source-select filter filter-select filter-7bddf04">
                <select
                    value={selectedOption}
                    onChange={handleOptionChange}
                    ref={selectRef}
                    className="select select-picker"
                >
                    <option value="*" onClick={(e) => {}}>
                        All
                    </option>
                    <option value="company">Company</option>
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                    <option value="technology">Technology</option>
                </select>
            </div>
        </>
    );
}

export default PostFilterDropDown;
