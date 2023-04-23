export default {
  translation: {
    layout: {
      brand: 'Hexlet Chat',
      logoutButton: 'Выйти',
    },
    notFoundPage: {
      title: 'Страница не найдена',
      text: 'Но вы можете перейти',
      link: 'на главную страницу',
    },
    chatPage: {
      toasts: {
        channelAdded: 'Канал создан',
        channelRemoved: 'Канал удалён',
        channelRenamed: 'Канал переименован',
        sessionExpired: 'Ваша сессия истекла. Пожалуйста, войдите заново',
        fetchingError: 'Ошибка при получении данных с сервера',
      },
      error: {
        text: 'Что то пошло не так. Перезагрузите страницу или повторите попытку позже.',
        button: 'Повторить попытку',
      },
      channels: {
        header: 'Каналы',
        dropMenu: {
          remove: 'Удалить',
          rename: 'Переименовать',
        },
      },
      messages: {
        header: {
          channelName: '# {{name}}',
          messagesCounter_one: '{{count}} сообщение',
          messagesCounter_few: '{{count}} сообщения',
          messagesCounter_many: '{{count}} сообщений',
        },
        body: {
          placeholder: 'Нет сообщений',
        },
        form: {
          placeholder: 'Введите сообщение...',
        },
      },
      modals: {
        addModal: {
          header: 'Добавить канал',
          buttons: {
            submit: 'Отправить',
            cancel: 'Отмена',
          },
        },
        renameModal: {
          header: 'Переименовать канал',
          buttons: {
            submit: 'Отправить',
            cancel: 'Отмена',
          },
        },
        removeModal: {
          header: 'Удалить канал',
          body: 'Уверены?',
          buttons: {
            submit: 'Удалить',
            cancel: 'Отмена',
          },
        },
        errors: {
          emptyLength: 'Пустое название канала',
          minLength: 'Название канала не должно превышать 20 символов',
          alreadyExist: 'Название канала не должно превышать 20 символов',
        },
      },
    },
    loginPage: {
      form: {
        title: 'Войти',
        loginInput: {
          placeholder: 'Ваш ник',
        },
        passwordInput: {
          placeholder: 'Пароль',
          errorText: 'Неверные имя пользователя или пароль',
        },
        submitButton: 'Войти',
      },
      footer: {
        text: 'Нет аккаунта?',
        link: 'Регистрация',
      },
    },
    signupPage: {
      form: {
        title: 'Регистрация',
        loginInput: {
          placeholder: 'Имя пользователя',
          errorText: {
            alreadyExist: 'Пользователь с таким именем уже существует',
            min: 'От 3 до 20 символов',
            max: 'От 3 до 20 символов',
            required: 'Обязательное поле',
          },
        },
        passwordInput: {
          placeholder: 'Пароль',
          errorText: {
            min: 'Не менее 6 символов',
            required: 'Обязательное поле',
          },
        },
        confirmPasswordInput: {
          placeholder: 'Подтвердите пароль',
          errorText: 'Пароли должны совпадать',
        },
        submitButton: 'Зарегистрироваться',
      },
    },
  },
};
