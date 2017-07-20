'use strict'

const Chalk = require('chalk')
const Moment = require('moment')

/**
 * Generates the string representation of now date (UTC format)
  * @return {String} UTC date as a string
 */
function now() {
    return `${Moment.utc().format('YYYY-MM-DD HH:mm:ss')}`
}

/**
 * Write a log
 * @param {String} str Line to log
 * @returns {void}
 */
function raw(str) {
    if (process.env.NODE_ENV !== 'test') {
        console.log(`[${now()}] ${str}`)
    }
}

module.exports = {
    /**
     * Writes a line of `debug`
     * @param {String} str Line to log
     * @returns {void}
     */
    debug : (str) => {
        raw(` ${Chalk.gray(str)}`)
    },
    /**
     * Writes a line of `info`
     * @param {String} str Line to log
     * @returns {void}
     */
    info : (str) => {
        raw(`${Chalk.blue(str)}`)
    },
    /**
     * Writes a line of `warning`
     * @param {String} str Line to log
     * @returns {void}
     */
    warning : (str) => {
        raw(`${Chalk.bold.yellow(str)}`)
    },
    /**
     * Writes a line of `error`
     * @param {String} str Line to log
     * @returns {void}
     */
    error : (str) => {
        raw(`${Chalk.bold.red(str)}`)
    },
    /**
     * Writes a line of `success`
     * @param {String} str Line to log
     * @returns {void}
     */
    success : (str) => {
        raw(`${Chalk.green(str)}`)
    },
    /**
     * Writes a common log
     * @param {String} str Line to log
     * @returns {void}
     */
    log : (str) => {
        raw(`${Chalk.white(str)}`)
    },
}
