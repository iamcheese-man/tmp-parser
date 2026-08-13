function parseTMP(text) {
    return text
        // Size
        .replace(/<size=(\d+)>/g, '<span style="font-size:$1px">')
        .replace(/<\/size>/g, '</span>')

        // Bold
        .replace(/<b>/g, '<strong>')
        .replace(/<\/b>/g, '</strong>')

        // Italic
        .replace(/<i>/g, '<em>')
        .replace(/<\/i>/g, '</em>')

        // Color
        .replace(/<color=(.*?)>/g, '<span style="color:$1">')
        .replace(/<\/color>/g, '</span>')

        // Alpha transparency
        .replace(/<alpha=#([0-9a-fA-F]{2})>/g, (_, alpha) => {
            const opacity = parseInt(alpha, 16) / 255
            return `<span style="opacity:${opacity}">`
        })
        .replace(/<\/alpha>/g, '</span>')

        // Padding
        .replace(/<padding=(\d+)>/g, '<span style="padding:$1px">')
        .replace(/<\/padding>/g, '</span>')

        // Margin
        .replace(/<margin=(\d+)>/g, '<span style="margin:$1px">')
        .replace(/<\/margin>/g, '</span>')

        // Alignment
        .replace(/<align=(.*?)>/g, '<div style="text-align:$1">')
        .replace(/<\/align>/g, '</div>')

        // Underline
        .replace(/<u>/g, '<u>')
        .replace(/<\/u>/g, '</u>')

        // Strikethrough
        .replace(/<s>/g, '<span style="text-decoration:line-through">')
        .replace(/<\/s>/g, '</span>')

        // Line break
        .replace(/<br>/g, '<br>');
}

module.exports = { parseTMP };
