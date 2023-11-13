type DialogButtonType = 'Yes' | 'No';

interface FormButton {
    type: 'Add' | 'Remove' | 'Buy',
}

type AnyButtonType = FormButton['type'] | DialogButtonType;

type ConfirmationHandlingFormButton = FormButton & {
    onConfirm?:(param: DialogButtonType) => void;
};
