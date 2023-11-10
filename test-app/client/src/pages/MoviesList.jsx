import React, { Component, useEffect, useState } from 'react'
import ReactTable from 'react-table'
import api from '../api'
import styled from 'styled-components'
import 'react-table/react-table.css'

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

const UpdateMovie = ({id}) => {
    const updateUser = event => {
        event.preventDefault()
        window.location.href = `/movies/update/${id}`
    }

    return <Update onClick={updateUser}>Update</Update>
}

const DeleteMovie = ({id}) => {
    const deleteUser = event => {
        event.preventDefault()

        if (window.confirm(`Confirm delete of movie ${id}`)) {
            api.deleteMovieById(id)
            window.location.reload()
        }
    }

    return <Delete onClick={deleteUser}>Delete</Delete>
};

const MoviesList = props => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [columns, setColumns] = useState([
        {
            Header: 'ID',
            accessor: '_id',
            filterable: true,
        },
        {
            Header: 'Name',
            accessor: 'name',
            filterable: true,
        },
        {
            Header: 'Rating',
            accessor: 'rating',
            filterable: true,
        },
        {
            Header: 'Time',
            accessor: 'time',
            Cell: props => <span>{props.value.join(' / ')}</span>,
        },
        {
            Header: '',
            accessor: '',
            Cell: ({original}) => (
                <span>
                    <DeleteMovie id={original._id} />
                </span>
            )
        },
        {
            Header: '',
            accessor: '',
            Cell: ({original}) => (
                <span>
                    <UpdateMovie id={original._id} />
                </span>
            )
        }
    ])

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)

            await api.getAllMovies().then(movies => {
                setMovies(movies.data.data)
                setIsLoading(false)
            })
        }

        fetchData()
    }, []);

    return (
        <Wrapper>
            {!!movies.length && (
                <ReactTable
                    data={movies}
                    columns={columns}
                    loading={isLoading}
                    defaultPageSize={10}
                    showPageSizeOptions={true}
                    minRows={0}
                />
            )}
        </Wrapper>
    )
}

export default MoviesList
