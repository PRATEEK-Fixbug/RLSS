import React, { useState, useEffect } from 'react';
import { Container, Card, Table, Button, Badge, Modal, Form, Alert, Spinner } from 'react-bootstrap';
import { Fade, Slide } from 'react-awesome-reveal';

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [activeTab, setActiveTab] = useState('messages');

  useEffect(() => {
    fetchMessages();
    fetchUsers();
  }, []);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem('rlss_jwt');
      const response = await fetch('http://localhost:5000/api/contacts', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      } else {
        setError('Failed to load messages');
      }
    } catch (err) {
      setError('Failed to load messages');
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('rlss_jwt');
      const response = await fetch('http://localhost:5000/api/users', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
    } catch (err) {
      console.log('Users endpoint not implemented yet');
    }
  };

  const handleDeleteMessage = async (messageId) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        const token = localStorage.getItem('rlss_jwt');
        const response = await fetch(`http://localhost:5000/api/contacts/${messageId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.ok) {
          setMessages(messages.filter(msg => msg._id !== messageId));
        }
      } catch (err) {
        setError('Failed to delete message');
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <Container className="text-center" style={{ marginTop: '100px' }}>
        <Spinner animation="border" />
        <p className="mt-3">Loading dashboard...</p>
      </Container>
    );
  }

  return (
    <Container fluid className="p-4">
      <Fade duration={1000}>
        <div className="mb-4">
          <h1 className="text-white mb-3">Admin Dashboard</h1>
          <p className="text-muted">Welcome back! Manage your website content and user interactions.</p>
        </div>
      </Fade>

      {error && <Alert variant="danger">{error}</Alert>}

      {/* Navigation Tabs */}
      <div className="mb-4">
        <div className="d-flex border-bottom">
          <button
            className={`btn ${activeTab === 'messages' ? 'btn-primary' : 'btn-outline-primary'} me-3`}
            onClick={() => setActiveTab('messages')}
          >
            Contact Messages ({messages.length})
          </button>
          <button
            className={`btn ${activeTab === 'users' ? 'btn-primary' : 'btn-outline-primary'} me-3`}
            onClick={() => setActiveTab('users')}
          >
            User Management
          </button>
          <button
            className={`btn ${activeTab === 'analytics' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setActiveTab('analytics')}
          >
            Analytics
          </button>
        </div>
      </div>

      {/* Messages Tab */}
      {activeTab === 'messages' && (
        <Slide direction="up" duration={800}>
          <Card style={{ background: '#1a1a1a', border: '1px solid #333' }}>
            <Card.Header style={{ background: '#2a2a2a', borderBottom: '1px solid #333' }}>
              <h5 className="mb-0 text-white">Contact Messages</h5>
            </Card.Header>
            <Card.Body className="p-0">
              {messages.length === 0 ? (
                <div className="text-center py-5">
                  <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📧</div>
                  <p className="text-muted">No messages yet</p>
                </div>
              ) : (
                <Table responsive className="mb-0">
                  <thead style={{ background: '#2a2a2a' }}>
                    <tr>
                      <th className="text-white">Name</th>
                      <th className="text-white">Email</th>
                      <th className="text-white">Message</th>
                      <th className="text-white">Date</th>
                      <th className="text-white">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {messages.map((message) => (
                      <tr key={message._id} style={{ borderBottom: '1px solid #333' }}>
                        <td className="text-white">{message.name}</td>
                        <td className="text-white">{message.email}</td>
                        <td className="text-white">
                          <div style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {message.message}
                          </div>
                        </td>
                        <td className="text-muted">{formatDate(message.createdAt)}</td>
                        <td>
                          <Button
                            variant="outline-info"
                            size="sm"
                            onClick={() => {
                              setSelectedMessage(message);
                              setShowMessageModal(true);
                            }}
                            className="me-2"
                          >
                            View
                          </Button>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => handleDeleteMessage(message._id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Card.Body>
          </Card>
        </Slide>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <Slide direction="up" duration={800}>
          <Card style={{ background: '#1a1a1a', border: '1px solid #333' }}>
            <Card.Header style={{ background: '#2a2a2a', borderBottom: '1px solid #333' }}>
              <h5 className="mb-0 text-white">User Management</h5>
            </Card.Header>
            <Card.Body>
              <div className="text-center py-5">
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>👥</div>
                <p className="text-muted">User management features coming soon!</p>
                <Button variant="outline-primary">Add New User</Button>
              </div>
            </Card.Body>
          </Card>
        </Slide>
      )}

      {/* Analytics Tab */}
      {activeTab === 'analytics' && (
        <Slide direction="up" duration={800}>
          <Card style={{ background: '#1a1a1a', border: '1px solid #333' }}>
            <Card.Header style={{ background: '#2a2a2a', borderBottom: '1px solid #333' }}>
              <h5 className="mb-0 text-white">Analytics Dashboard</h5>
            </Card.Header>
            <Card.Body>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px', borderRadius: '10px', color: 'white' }}>
                    <h3>{messages.length}</h3>
                    <p className="mb-0">Total Messages</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', padding: '20px', borderRadius: '10px', color: 'white' }}>
                    <h3>{users.length}</h3>
                    <p className="mb-0">Registered Users</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', padding: '20px', borderRadius: '10px', color: 'white' }}>
                    <h3>12</h3>
                    <p className="mb-0">Years of Service</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Slide>
      )}

      {/* Message Detail Modal */}
      <Modal show={showMessageModal} onHide={() => setShowMessageModal(false)} size="lg">
        <Modal.Header closeButton style={{ background: '#2a2a2a', color: 'white' }}>
          <Modal.Title>Message Details</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: '#1a1a1a', color: 'white' }}>
          {selectedMessage && (
            <div>
              <div className="mb-3">
                <strong>From:</strong> {selectedMessage.name} ({selectedMessage.email})
              </div>
              <div className="mb-3">
                <strong>Date:</strong> {formatDate(selectedMessage.createdAt)}
              </div>
              <div className="mb-3">
                <strong>Message:</strong>
                <div className="mt-2 p-3" style={{ background: '#2a2a2a', borderRadius: '5px' }}>
                  {selectedMessage.message}
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer style={{ background: '#2a2a2a', borderTop: '1px solid #333' }}>
          <Button variant="secondary" onClick={() => setShowMessageModal(false)}>
            Close
          </Button>
          <Button 
            variant="danger" 
            onClick={() => {
              if (selectedMessage) {
                handleDeleteMessage(selectedMessage._id);
                setShowMessageModal(false);
              }
            }}
          >
            Delete Message
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminDashboard; 