import { ChangeEvent, useEffect, useRef, useState } from 'react';
import useActions from '../../../hooks/useActions';
import useIsMount from '../../../hooks/useIsMount';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { SERVER_URL } from '../../../utils/constants/url';
import Button from "../../ui/Button/Button";
import TextField from "../../ui/TextField/TextField";
import s from "./ChangeAvatar.module.scss";


const ChangeAvatar = () => {
    const { uploadAvatar, deleteAvatar } = useActions();
    const { id, avatar } = useTypedSelector(state => state.user.userData!);
    const [previewAvatar, setPreviewAvatar] = useState<Blob | null>();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const isMount = useIsMount();

    useEffect(() => {
        if (isMount) {
            if (previewAvatar) {
                const formData = new FormData();
                formData.append("id", id);
                formData.append("newAvatar", previewAvatar);
                uploadAvatar(formData);
            } else {
                deleteAvatar(id);
            }
        }
    }, [previewAvatar]);


    const chooseAvatar = () => {
        if (!previewAvatar && !avatar) {
            fileInputRef.current?.click();
        } else {
            setPreviewAvatar(null);
        }
    }


    const savePreviewAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setPreviewAvatar(e.target.files[0]);
        }
    }

    return (
        <div className={s["avatar"]}>
            <img
                className={s["avatar__img"]}
                src={previewAvatar ?
                    URL.createObjectURL(previewAvatar)
                    :
                    avatar ? `${SERVER_URL}/${avatar}` : `${SERVER_URL}/avatar_default.jpg`
                }
                alt="Avatar"
            />
            <Button className={s["avatar__btn"]} onClick={chooseAvatar}> {!previewAvatar && !avatar ? "Download" : "Delete"} </Button>
            <TextField
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={savePreviewAvatar}
                className={s["avatar__input"]}
            />
        </div>
    );
};

export default ChangeAvatar;