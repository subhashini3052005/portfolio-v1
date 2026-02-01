const Floating = ({count=40}) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {
        Array.from({length:count}).map((_,i)=>{
        const size = Math.random() *3+3;
        const duration = Math.random() *10+10;
        const delay = Math.random() -20;
        const left = Math.random() *100;
        return(
            <span className="particles"
            style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                bottom:`-10px`,
                animationDuration:`${duration}s`,
                animationDelay:`${delay}s`,
            }}
            />
        );

        })
        
        }
    </div>
  )
}
export default Floating;