import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const Links = () => (
    <>
        <Link to="/" className="navbar-brand">
            My first MERN Application
        </Link>
        <Collapse>
            <List>
                <Item>
                    <Link to="/movies/list" className="nav-link">
                        List Movies
                    </Link>
                </Item>
                <Item>
                    <Link to="/movies/create" className="nav-link">
                        Create Movie
                    </Link>
                </Item>
            </List>
        </Collapse>
    </>
)

export default Links;
