const PageBreak = ( {width = "w-full", color = "bg-white"}) => {
    return <div className={`h-[3px] ${width} ${color}`} />
}

export default PageBreak;