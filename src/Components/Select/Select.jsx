

const Select = (props) => {

    return (
        <div>
            <select
                style={props.style}
                value={props.value}
                onChange={event => props.onChange(event.target.value)} >
                <option disabled value=''>{props.defaultValue}</option>

                {props.options.map(option =>
                    <option value={option.value} key={option.value}>{option.name}</option>
                )}

            </select>

        </div>
    )
}



export default Select;