/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family',
    knowsProgramming = true,
    config = { family: 4 }
) {
    if (knowsProgramming = true) {
        if (focus == 'family') { return 800 / 4; } else if (focus == 'friends') { return 800 / 10; } else if (focus == 'normal_life') { return 800 / 20; } else if (focus == 'profession') { return Math.round(800 / 30) } else if (focus == 'carrier') { return 800 / 40 } else if (focus == 'top_peformance') { return Math.ceil(800 / 60) }
    } else if (knowsProgramming = false) {
        if (focus == 'family') { return 800 / 2; }
    }
};