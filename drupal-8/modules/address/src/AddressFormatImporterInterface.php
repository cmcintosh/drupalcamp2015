<?php

/**
 * @file
 * Contains \Drupal\address\AddressFormatImporterInterface.
 */

namespace Drupal\address;

/**
 * Imports the library-provided address format data into config entities.
 */
interface AddressFormatImporterInterface {

  /**
   * Imports all available data.
   */
  public function importAll();

  /**
   * Imports address formats for the given country codes.
   *
   * @param array $countryCodes
   *   The country codes for which address formats should be imported.
   */
  public function importEntities(array $countryCodes);

  /**
   * Imports translations for the given language codes.
   *
   * @param array $langcodes
   *   Array of language codes to import translations for.
   */
  public function importTranslations(array $langcodes);

}
