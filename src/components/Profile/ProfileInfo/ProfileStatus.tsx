import React, {ChangeEvent, ChangeEventHandler, useEffect, useState} from 'react'

export type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatus: React.FC<ProfileStatusType> = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [localStatus, setLocalStatus] = useState(props.status)

    console.log("Profile status with Hooks")
    useEffect(() => {
        setLocalStatus(props.status)
    }, [props.status])

    const activatedStatusMode = () => {
        setEditMode(true)
    }
    const deactivatedStatusMode = () => {
        setEditMode(false)
        console.log('local status send to api', localStatus)
        props.updateStatus(localStatus)
    }
    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(event.target.value)
    }

    // const {status} = props
    return (
        <div>
            {!editMode && <div><span onDoubleClick={activatedStatusMode}>Status: {props.status}</span></div>}
            {editMode &&
            <div onBlur={deactivatedStatusMode}><input onChange={onStatusChange} value={localStatus}/></div>}
        </div>
    )
}

export default ProfileStatus