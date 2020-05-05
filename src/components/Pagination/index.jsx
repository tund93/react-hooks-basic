import React from 'react'
import PropTypes from 'prop-types'

function Pagination(props) {
    const { pagination, onChangePages } = props;
    const { _page, _limit, _totalRows } = pagination;
    const totalPages = Math.ceil(_totalRows / _limit);

    const handleOnChange = (newPage) => {
        if (!onChangePages) return;
        onChangePages(newPage);
    }
    return (
        <div>
            <button
                disabled={_page <= 1}
                onClick={() => handleOnChange(_page - 1)}
            >
                Prev
        </button>
            <button
                disabled={_page >= totalPages}
                onClick={() => handleOnChange(_page + 1)}
            >
                Next
        </button>

        </div>
    )
}

Pagination.propTypes = {
    pagination: PropTypes.array.isRequired,
    onChangePages: PropTypes.func,
}
Pagination.defaultProps = {
    onChangePages: null,
}

export default Pagination

