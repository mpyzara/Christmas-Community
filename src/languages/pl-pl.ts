export const momentLocale = 'pl'

export const strings = {
  _NOT_LOCALIZED: key => `${key} Jeszcze nie przetłumaczono na język polski`,
  ADMIN_CLEAR_WISHLISTS_BUTTON: 'Usuń wszystkie listy',
  ADMIN_CLEAR_WISHLISTS_DESCRIPTION: 'To natychmiast <b>usunie wszystkie listy życzeń!</b> Rozważ utworzenie kopii zapasowej bazy danych przed kontynuowaniem.',
  ADMIN_CLEAR_WISHLISTS_HEADER: 'Usunięcie list',
  ADMIN_SETTINGS_CLEARDB_BUTTON: 'Usuń dane',
  ADMIN_SETTINGS_CLEARDB_DESCRIPTION: '<b>Uwaga</b>: Te opcje <b>usuną dane</b>! Rozważ utworzenie kopii zapasowej bazy danych przed kontynuowaniem.',
  ADMIN_SETTINGS_CLEARDB_HEADER: 'Usunięcie danych',
  ADMIN_SETTINGS_CLEARDB_SUCCESS: 'Wszystkie listy pomyślnie usunięte',
  ADMIN_SETTINGS_HEADER: 'Ustawienia administratora',
  ADMIN_SETTINGS_USERS_ADD_BUTTON: 'Dodaj użytkownika',
  ADMIN_SETTINGS_USERS_ADD_HEADER: 'Dodaj użytkownika',
  ADMIN_SETTINGS_USERS_ADD_PLACEHOLDER: 'Martin',
  ADMIN_SETTINGS_USERS_ADD_USERNAME: 'Nazwa użytkownika',
  ADMIN_SETTINGS_USERS_ADD_ERROR_USERNAME_EMPTY: 'Nazwa użytkownika nie może być pusta.',
  ADMIN_SETTINGS_USERS_EDIT_DELETE_FAIL_ADMIN: 'Nie można usunąć użytkownika z uprawnieniami administratora.',
  ADMIN_SETTINGS_USERS_EDIT_DELETE_SUCCESS: name => `Użytkownik ${name} pomyślnie usunięty`,
  ADMIN_SETTINGS_USERS_EDIT_DEMOTE_NOT_ADMIN: 'użytkownik nie ma uprawnień administratora',
  ADMIN_SETTINGS_USERS_EDIT_DEMOTE_SELF: 'Nie możesz odebrać sobie uprawnień.',
  ADMIN_SETTINGS_USERS_EDIT_DEMOTE_SUCCESS: name => `${name} nie ma już uprawnień administratora.`,
  ADMIN_SETTINGS_USERS_EDIT_IMPERSONATE_SUCCESS: name => `Teraz jesteś zalogowany jako ${name}.`,
  ADMIN_SETTINGS_USERS_EDIT_NO_USERNAME_PROVIDED: 'Nie wybrano użytkownika.',
  ADMIN_SETTINGS_USERS_EDIT_PROMOTE_ALREADY_ADMIN: 'Użytkownik już ma uprawnienia administratora.',
  ADMIN_SETTINGS_USERS_EDIT_PROMOTE_DEMOTE_NOT_FOUND: 'Użytkownik nie znaleziony.',
  ADMIN_SETTINGS_USERS_EDIT_PROMOTE_SUCCESS: name => `Uprawnienia administratora przyznane ${name}.`,
  ADMIN_SETTINGS_USERS_EDIT_RENAMED_USER: 'Użytkownik przemianowany!',
  ADMIN_SETTINGS_USERS_EDIT_SAME_NAME: 'Nowa nazwa użytkownika jest taka sama jak poprzednia.',
  ADMIN_SETTINGS_USERS_EDIT: 'Edytuj',
  ADMIN_SETTINGS_USERS_HEADER: 'Użytkownicy',
  ADMIN_SETTINGS_VERSION_INFO: 'Informacje o wersji',
  ADMIN_USER_EDIT_ACCOUNT_UNCONFIRMED: 'To konto nie zostało jeszcze potwierdzone.',
  ADMIN_USER_EDIT_ADMIN_ISADMIN: name => `${name} jest administratorem.`,
  ADMIN_USER_EDIT_ADMIN_NOTADMIN: name => `${name} nie jest administratorem.`,
  ADMIN_USER_EDIT_ADMIN: 'Administrator',
  ADMIN_USER_EDIT_CHANGE_NAME: 'Zmień imię',
  ADMIN_USER_EDIT_CHANGE_USERNAME: 'Zmień nazwę użytkownika',
  ADMIN_USER_EDIT_CONFIRMATION_LINK: 'Link potwierdzający',
  ADMIN_USER_EDIT_DELETE_ADMIN: 'Użytkownik jest administratorem',
  ADMIN_USER_EDIT_DELETE_HEADER: 'Nieodwracalne usunięcie',
  ADMIN_USER_EDIT_DELETE_USER: name => `Usuń użytkownika ${name}`,
  ADMIN_USER_EDIT_DEMOTE_SELF: 'Nie możesz odebrać sobie uprawnień.',
  ADMIN_USER_EDIT_DEMOTE: name => `Odebrać uprawnienia ${name}`,
  ADMIN_USER_EDIT_EDITING_USER: name => `Edycja użytkownika "${name}"`,
  ADMIN_USER_EDIT_GENERATE_NEW_LINK: 'Wygeneruj nowy link',
  ADMIN_USER_EDIT_IMPERSONATE_BUTTON: name => `Zaloguj się jako ${name}`,
  ADMIN_USER_EDIT_IMPERSONATE_HEADER: 'Zaloguj się jako',
  ADMIN_USER_EDIT_LINK_EXPIRY_FUTURE: fromNow => `Link wygaśnie ${fromNow}`, // fromNow is localized by moment
  ADMIN_USER_EDIT_LINK_EXPIRY_PAST: fromNow => `Link wygasł ${fromNow}`,
  ADMIN_USER_EDIT_PROMOTE: name => `Nadaj uprawnienia ${name}`,
  ADMIN_USER_EDIT_RESET_PASSWORD_HASLINK_EXPIRY_FUTURE: fromNow => `Wygaśnie ${fromNow}`,
  ADMIN_USER_EDIT_RESET_PASSWORD_HASLINK_EXPIRY_PAST: fromNow => `Wygasło ${fromNow}`,
  ADMIN_USER_EDIT_RESET_PASSWORD_HASLINK: 'Oto link do zresetowania hasła dla użytkownika.',
  ADMIN_USER_EDIT_RESET_PASSWORD_HEADER: 'Zresetuj hasło',
  ADMIN_USER_EDIT_RESET_PASSWORD_LINK_CANCEL: 'Anuluj link do zresetowania hasła',
  ADMIN_USER_EDIT_RESET_PASSWORD_LINK_CREATE: 'Utwórz link do zresetowania hasła',
  ADMIN_USER_EDIT_RESET_PASSWORD_LINK_REFRESH: 'Odśwież link do zresetowania hasła',
  ADMIN_USER_EDIT_USERNAME: 'Nazwa użytkownika',
  BACK_BUTTON: 'Wstecz',
  CONFIRM_ACCOUNT_EXPIRED: 'Twój link do utworzenia konta wygasł. Poproś o nowy.',
  CONFIRM_ACCOUNT_HEADER_INVALID: `${_CC.config.siteTitle} | Nieprawidłowy link potwierdzający`,
  CONFIRM_ACCOUNT_HEADER_VALID: `${_CC.config.siteTitle} | Potwierdź utworzenie konta`,
  CONFIRM_ACCOUNT_INVALID: 'Ten link potwierdzający jest nieprawidłowy. Konto mogło zostać usunięte lub link nie został w pełni skopiowany.',
  CONFIRM_ACCOUNT_SET_PW_BUTTON: `Dołącz do ${_CC.config.siteTitle}`,
  CONFIRM_ACCOUNT_SET_PW_PLACEHOLDER: 'hEsl0!',
  CONFIRM_ACCOUNT_SET_PW_TEXT: name => `Cześć ${name}! Ustaw tutaj swoje hasło.`,
  CONFIRM_ACCOUNT_SUCCESS: `Witamy w ${_CC.config.siteTitle}!`,
  LOGIN_BUTTON: 'Zaloguj się',
  LOGIN_PASSWORD_PLACEHOLDER: 'hEsl0!',
  LOGIN_PASSWORD: 'Hasło',
  LOGIN_USERNAME_PLACEHOLDER: 'Martin',
  LOGIN_USERNAME: 'Nazwa użytkownika',
  LOGOUT_BUTTON: 'Wyloguj się',
  NAVBAR_ADMIN: 'Administracja',
  NAVBAR_LOGIN: 'Zaloguj się',
  NAVBAR_LOGOUT: 'Wyloguj się',
  NAVBAR_PROFILE: 'Profil',
  NAVBAR_WISHLIST: 'Moja lista życzeń',
  NOTE_BACK: name => `Wróć do listy życzeń ${name}`,
  NOTE_GET_PRODUCT_DATA: 'Pobierz dane o produkcie',
  NOTE_GUARD: 'Nieprawidłowa nazwa użytkownika',
  NOTE_IMAGE_URL: 'URL obrazka',
  NOTE_MISSING_PROP: prop => `Brak właściwości: ${prop}`, // not really possible to localize this unfortunately
  NOTE_NAME: 'Nazwa',
  NOTE_NOTE: 'Notatka',
  NOTE_PRICE: 'Cena',
  NOTE_REFRESH_DATA: 'Odśwież dane',
  NOTE_REMOVE_GUARD: 'Nieprawidłowa nazwa użytkownika',
  NOTE_REMOVE_MISSING: 'Brak notatki',
  NOTE_REMOVE_SUCCESS: 'Notatka pomyślnie usunięta',
  NOTE_SAVE_BUTTON: 'Zapisz pozycję',
  NOTE_SUCCESS: 'Pomyślnie zapisane!',
  NOTE_URL: 'URL',
  PROFILE_HEADER: 'Profil',
  PROFILE_PASSWORD_BUTTON: 'Zapisz',
  PROFILE_PASSWORD_NEW: 'Nowe hasło',
  PROFILE_PASSWORD_OLD_MISMATCH: 'Nieprawidłowe stare hasło',
  PROFILE_PASSWORD_OLD: 'Stare hasło',
  PROFILE_PASSWORD_PLACEHOLDER: 'hEsl0!',
  PROFILE_PASSWORD_REQUIRED_NEW: 'Nowe hasło nie zostało podane',
  PROFILE_PASSWORD_REQUIRED_OLD: 'Stare hasło nie zostało podane',
  PROFILE_PASSWORD_SUCCESS: 'Hasło pomyślnie zmienione!',
  PROFILE_PASSWORD_TITLE: name => `Ustawienia profilu - Hasło - ${name}`,
  PROFILE_PFP_IMAGE_URL: 'URL obrazka',
  PROFILE_SAVE_PFP_DISABLED: 'Obrazki profilowe są wyłączone',
  PROFILE_SAVE_PFP_SUCCESS: 'Obrazek profilowy pomyślnie zapisany!',
  PROFILE_SECURITY_CHANGE_PASSWORD: 'Zmień hasło',
  PROFILE_SECURITY: 'Bezpieczeństwo',
  PROFILE_TITLE: name => `Ustawienia profilu - ${name}`,
  RESET_PASSWORD_BUTTON: 'Zresetuj hasło',
  RESET_PASSWORD_GREETING_EXPIRED: 'Twój link do zresetowania hasła wygasł. Poproś o nowy.',
  RESET_PASSWORD_GREETING_INVALID: 'Ten link do zresetowania hasła jest nieprawidłowy. Konto mogło zostać usunięte lub link nie został w pełni skopiowany.',
  RESET_PASSWORD_GREETING_VALID: name => `Cześć ${name}! Ustaw tutaj swoje hasło.`,
  RESET_PASSWORD_HEADER_INVALID: `${_CC.config.siteTitle} | Nieprawidłowy link do zresetowania hasła`,
  RESET_PASSWORD_HEADER_VALID: `${_CC.config.siteTitle} | Zresetuj hasło`,
  RESET_PASSWORD_PASSWORD_PLACEHOLDER: 'hEsl0!',
  RESET_PASSWORD_PASSWORD: 'Hasło',
  RESET_PASSWORD_SUCCESS: 'Hasło pomyślnie zresetowane',
  SETUP_ADMIN_USER: 'Administrator',
  SETUP_BUTTON: 'Ustaw!',
  SETUP_HEADER: 'Konfiguracja',
  SETUP_PASSWORD_PLACEHOLDER: 'hEsl0!',
  SETUP_PASSWORD: 'Hasło',
  SETUP_USERNAME_PLACEHOLDER: 'Martin',
  SETUP_USERNAME: 'Nazwa użytkownika',
  SUPPORTED_SITES_HEADER: 'Obsługiwane sklepy',
  SUPPORTED_SITES_TEXT: 'Chcesz dodać obsługę nowego sklepu? Zgłoś nowy ticket <a href="https://github.com/Wingysam/get-product-data/issues/new">TUTAJ</a>! :)',
  UPDATE_NOTICE: (current, latest) => `
    <span class="has-text-danger is-size-4 has-text-weight-bold">
      Nie używasz najnowszej wersji Christmas Community. Nowa wersja może zawierać nowe funkcje lub poprawki błędów. Rozważ aktualizację :)
    </span>
    <br>
    <span>(Możesz wyłączyć tę notyfikację zmieniając konfigurację pliku <code>UPDATE_CHECK=false</code>)</span>
    <br><br>
    <span>Aktualna wersja: ${current}</span>
    <br>
    <span>Najnowsza wersja: ${latest}</span>
    <span class="has-text-info" style="float: right;">Ta notyfikacja jest widoczna tylko dla administratorów.</span>`,
  WISHLIST_ADD: 'Dodaj pozycję do listy życzeń',
  WISHLIST_ADDED_BY_USER: addedBy => `Dodane przez: ${addedBy}`,
  WISHLIST_ADDED_BY: 'Dodane przez',
  WISHLIST_CONFLICT: 'Pozycje zostały dodane zbyt szybko jedna po drugiej. Spróbuj ponownie.',
  WISHLIST_DELETE: 'Usuń',
  WISHLIST_EDIT_ITEM: 'Edytuj',
  WISHLIST_IMAGE: 'Obrazek',
  WISHLIST_MOVE_DOWN: 'Przenieś w dół',
  WISHLIST_MOVE_GUARD: 'Nieprawidłowy użytkownik',
  WISHLIST_MOVE_INVALID: 'Przeniesienie niedozwolone',
  WISHLIST_MOVE_ITEM_DOWN: 'Przenieś w dół',
  WISHLIST_MOVE_ITEM_TOP: 'Przenieś na górę',
  WISHLIST_MOVE_ITEM_UP: 'Przenieś w górę',
  WISHLIST_MOVE_SUCCESS: 'Pomyślnie przeniesione!',
  WISHLIST_MOVE_TOP: 'Przenieś na górę',
  WISHLIST_MOVE_UP: 'Przenieś w górę',
  WISHLIST_NAME: 'Nazwa',
  WISHLIST_NOTE: 'Notatka',
  WISHLIST_OPTIONAL: 'Opcjonalne',
  WISHLIST_PLEDGE_DUPLICATE: 'Pozycja już zarezerwowana',
  WISHLIST_PLEDGE_ITEM: 'Zarezerwuj',
  WISHLIST_PLEDGE_SUCCESS: 'Pomyślnie zarezerwowane!',
  WISHLIST_PLEDGE: 'Zarezerwuj',
  WISHLIST_PLEDGED: pledgedBy => `Zarezerwowane przez ${pledgedBy}`,
  WISHLIST_PRICE: 'Cena',
  WISHLIST_REFRESH_GUARD: 'Nieprawidłowa nazwa użytkownika',
  WISHLIST_REFRESH_NO_URL: 'Pozycja nie ma żadnego linku.',
  WISHLIST_REFRESH_SUCCESS: 'Dane zaktualizowane!',
  WISHLIST_REMOVE_GUARD: 'Nieprawidłowy użytkownik',
  WISHLIST_REMOVE_MISSING: 'Pozycja nieznaleziona',
  WISHLIST_REMOVE_SUCCESS: 'Pomyślnie usunięto z listy',
  WISHLIST_TITLE: name => `${_CC.config.siteTitle} - Lista życzeń - ${name}`,
  WISHLIST_UNPLEDGE_GUARD: 'Nie zarezerwowałeś tej pozycji', // should never happen unless someone makes their own http requests
  WISHLIST_UNPLEDGE_MISSING: 'Pozycja nieznaleziona',
  WISHLIST_UNPLEDGE_SUCCESS: 'Rezerwacja anulowana!',
  WISHLIST_UNPLEDGE: 'Anuluj rezerwację',
  WISHLIST_URL_LABEL: `Nazwa pozycji lub link do niej (<a href="${_CC.config.base}supported-sites">Obsługiwane sklepy</a>)`,
  WISHLIST_URL_PLACEHOLDER: 'https://www.amazon.com/dp/B00ZV9RDKK',
  WISHLIST_URL_REQUIRED: 'Nie podano pozycji lub linku do niej.',
  WISHLISTS_COUNTS_SELF: name => `${name}: ???/???`,
  WISHLISTS_COUNTS: (name, pledged, total) => `${name}: ${pledged}/${total}`,
  WISHLISTS_TITLE: `${_CC.config.siteTitle} - Listy życzeń`
} as const
