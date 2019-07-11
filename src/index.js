;(function(window, document) {

    /**
     * Initialize translator with source/target languages
     * @param  {[type]} options.from: ''            [description]
     * @param  {[type]} options.to:   ''            [description]
     * @return {[type]}               [description]
     */
    const _init = ({from = '', to = ''}) => {
        if (!from || !to) {
            console.log('No languages provided');
            return;
        }
        document.body.addEventListener('dblclick', function(event) {
            const word = getSelectedText();
            translate(event, from, to, word);
        });
    }

    /**
     * Translate the given word in provided languages
     * @param  {[type]} event [description]
     * @param  {[type]} from  [description]
     * @param  {[type]} to    [description]
     * @param  {[type]} text  [description]
     * @return {[type]}       [description]
     */
    const translate = (event, from, to, text) => {
        makeTranslationRequest(from, to, text)
        .then(response => {
            const translatedText = response[0][0][0];
            createTooltip(event, translatedText);
        })
        .catch(error => console.debug(error));
    }

    /**
     * Retrieve selected word
     * @return {[type]} [description]
     */
    const getSelectedText = () => {
        const selection = window.getSelection();
        const anchorNode = selection.anchorNode;
        return anchorNode.nodeValue.substring(selection.anchorOffset, selection.extentOffset);
    }

    /** 
     * Create a tooltip with translation
     * @param  {[type]} event [description]
     * @param  {[type]} text  [description]
     * @return {[type]}       [description]
     */
    const createTooltip = (event, text) => {
        const element = document.createElement('article');
        const content = document.createTextNode(text);
        const style = 'position:absolute;top:' + (event.pageY - 40) + 'px;left:' + (event.pageX - 40) + 'px; background:rgba(20,7,35,0.8);color:#cee2ba;z-index:100000; padding:5px 10px;font-size:13px;font-family:Helvetica,sans-serif;letter-spacing:.5px;border-radius:2px;';
        element.setAttribute('style', style);
        element.appendChild(content);
        document.body.appendChild(element);
    }

    /** 
     * Make a translation request to the google api
     * @param  {[type]} from [description]
     * @param  {[type]} to   [description]
     * @param  {[type]} text [description]
     * @return {[type]}      [description]
     */
    const makeTranslationRequest = (from, to, text) => {
        const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" 
                + from + "&tl=" + to + "&dt=t&q=" + encodeURI(text)
        return fetch(url)
        .then(response => 
            response.status === 200 ? 
            response.json() : 
            Promise.reject(response.json()));
    }

    window.Translator = {
        init: _init
    }

})(window, document);