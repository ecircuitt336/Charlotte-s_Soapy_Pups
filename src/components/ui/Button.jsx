export default function Button({
    as: Tag = "button",
    variant = "primary",
    size = "md",
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