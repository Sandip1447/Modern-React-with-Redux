import classNames from "classnames";

/*
* Common Panel css handling component
* */
function Panel({children, className, ...rest}) {
    const finalClassNames = classNames(
        'border rounded p-3 shadow bg-white w-full',
        className
    )
    return (
        <div {...rest} className={finalClassNames}>{children}</div>
    )
}

export default Panel