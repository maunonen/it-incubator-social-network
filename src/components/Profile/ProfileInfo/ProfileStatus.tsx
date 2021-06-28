import React, {useState} from 'react'

export type ProfileStatusType = {
    status: string
}

const ProfileStatus: React.FC<ProfileStatusType> = (props) => {

    const [editMode, setEditMode] = useState(false)


    const {status} = props
    return (
        <div>
            {!editMode && <div><span onDoubleClick={() => setEditMode(true)}>{status}</span></div>}
            { editMode && <div onBlur={() => setEditMode(false)}><input value={status}/></div> }
        </div>
    )
}

export default ProfileStatus