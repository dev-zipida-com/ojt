import React from 'react';

function User({user, onRemove, onColorChange}) {
    const {username, email, id, active} = user;
    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer'
            }} onClick={() => onColorChange(id)}>{username}</b> <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
}

function UserList({users, onRemove, onColorChange}) {
    return (
        <div>
            {
                users.map(
                    (user, index) => (
                        <User 
                            user={user} 
                            key={user.id} 
                            onRemove={onRemove}
                            onColorChange={onColorChange}
                        />
                    )
                )
            }
        </div>
    );
}

export default UserList;