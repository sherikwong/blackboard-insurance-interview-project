import React, { Component } from 'react'
import { Pagination as BSPage, PaginationItem, PaginationLink } from 'reactstrap';

class Pagination extends Component {
    constructor() {
        super();
        this.moveToPage = this.moveToPage.bind(this);
    }

    moveToPage(num) {

    }

    render() {
        return (
            <BSPage color="primary" aria-label="Page navigation example">
                <PaginationItem>
                    <PaginationLink first href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        5
                        </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last href="#" />
                </PaginationItem>
            </BSPage>
        )
    }
}

export default Pagination;
