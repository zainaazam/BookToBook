import React from 'react';
import {
  ModalView,
  Container,
  DoneIconContainer,
  ModalMessage,
  OkButton,
  OkText,
  Wrapper,
} from './styles';
import DoneIcon from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'styled-components/native';

interface CustomModalProps {
  showModal: boolean;
  hideModal?: () => void;
  message: string;
  onOkPress: () => void;
}

const CustomModal = ({
  showModal,
  message,
  hideModal,
  onOkPress,
}: CustomModalProps) => {
  const {colors} = useTheme();

  return (
    <ModalView isVisible={showModal} onBackdropPress={hideModal}>
      <Container>
        <Wrapper>
          <DoneIconContainer>
            <DoneIcon name="done" color={colors.white} size={20} />
          </DoneIconContainer>
          <ModalMessage>{message}</ModalMessage>
        </Wrapper>
        <OkButton
          onPress={() => {
            hideModal();
            onOkPress();
          }}>
          <OkText>OK</OkText> {/*This is ok button */}
        </OkButton>
      </Container>
    </ModalView>
  );
};

export default CustomModal;
