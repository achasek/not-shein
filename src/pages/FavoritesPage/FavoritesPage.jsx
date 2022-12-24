import { useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
// only users should be able to see their own favorites. pass user down here
export default function FavoritesPage({ user }) {
const [show, setShow] = useState(true)
function handleRedirect() {
    setTimeout(() => {navigate('/categories')}, 3000)
}
const handleClose = () => setShow(false)
const navigate = useNavigate();

    return (
        <>
            <h1>Favorites</h1>
            <Modal show={show} onHide={handleClose} onLoad={handleRedirect} >
                <Modal.Header closeButton>
                    <Modal.Title>Favorites Page
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>In the works</h2>
                </Modal.Body>
            </Modal>
        </>
    )
}