export function EditProfile(): React.JSX.Element {
    return (
        <form className='popup__form' id='edit-profile-form' name='edit-profile-form' noValidate>
            <label className='popup__field'>
                <input
                    id="name"
                    name="name"
                    placeholder="Nombre"
                    type="text"
                    required
                    minLength={2}
                    maxLength={40}
                />
                <span className='popup__error' id='place-name-error'></span>
            </label>
            <label className='popup__field'>
                <input
                    id="description"
                    name="description"
                    placeholder="Acerca de mí"
                    type="text"
                    required
                    minLength={2}
                    maxLength={200}
                />
                <span className='popup__error' id='place-description-error'></span>
            </label>
            <button className='button popup__button' type='submit'>
                Guardar
            </button>
        </form>
    );
}   