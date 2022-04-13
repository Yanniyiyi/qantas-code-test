const DOLLAR_SIGN = {
    'AUD': '$'
}

function PriceBox({ price, saving, currency }) {
    return (
        <div className={`flex flex-col items-end ${saving ? 'justify-end' : 'justify-center'}`}>
            <div className="text-sm py-1 text-right">
                <span><strong>1</strong> nitght total({currency})</span>
            </div>
            <div className="text-4xl flex items-start py-1">
                <span className="text-lg">{DOLLAR_SIGN[currency]}</span><span>{price}</span>
            </div>
            {saving && <div className="py-1  text-red-400 flex items-start text-right text-sm md:text-xl">
                <span>Save {DOLLAR_SIGN[currency]}{saving}</span><span className="text-sm">~</span>
            </div>}
        </div>
    );
}

export default PriceBox;