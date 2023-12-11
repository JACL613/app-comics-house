export const PingComponent = ({ ident, colorPrimary, colorSegundary }) => (<span key={ident} id={`ping-${ident}`} className="ping relative flex h-3 w-3">
<span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colorSegundary} opacity-75`}></span>
<span className={`relative inline-flex rounded-full h-3 w-3 ${colorPrimary}`}></span>
</span>)
