export default function Button({
    as: Tag = "button",
    className = "",
    children,
    ...props
}) {
    return (
        <Tag className={className} {...props}>
            {children}
        </Tag>
    );
}