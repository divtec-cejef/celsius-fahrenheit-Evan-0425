/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Evan Zuber
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
  'use strict'; // Demande un interprétation stricte du code
  let cTemperature = prompt('Température en celsius');
  let fTemperature = cTemperature * 9 / 5 +32;
  alert(cTemperature + '°C = ' + fTemperature + '°F');
}()); // Main IIFE

