export const fields = {
  name: {
    type: 'text',
    name: 'name',
    required: true,
    label: 'User name',
    placeholder: 'Name',
  },
  email: {
    type: 'email',
    name: 'email',
    required: true,
    label: 'User email',
    placeholder: 'email@mail.com',
  },
  password: {
    type: 'password',
    name: 'password',
    required: true,
    label: 'User password',
    placeholder: 'Minimum 6 letters',
  },
};
