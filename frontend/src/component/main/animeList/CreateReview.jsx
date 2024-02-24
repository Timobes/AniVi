export function CreateReview() {
    return (
        <div className="rewiew">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text" {...register('rewiew_text')}
                    placeholder="Текст:"
                    className="rewiew-input"/>
                <br/>
                <input
                    type="submit"
                    className="rewiew-btn"
                    value="Оставить рецензию "/>
            </form>
        </div>
    )
}