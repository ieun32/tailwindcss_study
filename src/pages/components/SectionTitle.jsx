export const SectionTitle = props => {
    const color = props.color ? props.color : 'blue'
    const className = `text-${color}-500 text-2xl pb-4`

    return (
        <div className={className}>
            {props.children}
        </div>
    )
}