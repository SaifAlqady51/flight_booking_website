import { AlertStyles, AlertText } from '@/styles/Alert.styles';
import { AiOutlineClose } from 'react-icons/ai';
import { SmallStyledIcon } from '@/styles/NavStyles/ListIcon.styles';
import { AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { switchAlert } from '@/redux/features/toggleAlert-slice';
interface AlertProps {
    message: string;
}

const Alert = ({ message }: AlertProps) => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <AlertStyles open>
            <AlertText>{message}</AlertText>
            <SmallStyledIcon>
                <AiOutlineClose
                    style={{ cursor: 'pointer' }}
                    onClick={() => dispatch(switchAlert())}
                />
            </SmallStyledIcon>
        </AlertStyles>
    );
};

export default Alert;
