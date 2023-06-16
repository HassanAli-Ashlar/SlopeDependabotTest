import React, { useState } from 'react';

function BlogSearch() {
    const [formData, setFormData] = useState({
        search: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <>
            <li id="search-2" className="widget widget_search">
                <div className="search">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Search"
                            id="search"
                            name="s"
                            className="input-field"
                            value={formData.Search}
                            required=""
                            onChange={handleChange}
                        />
                        <button type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </div>
            </li>
        </>
    );
}

export default BlogSearch;
