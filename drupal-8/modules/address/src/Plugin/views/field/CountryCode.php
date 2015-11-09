<?php

/**
 * @file
 * Contains \Drupal\address\Plugin\views\field\CountryCode.
 */

namespace Drupal\address\Plugin\views\field;

use CommerceGuys\Addressing\Repository\CountryRepositoryInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\views\Plugin\views\field\FieldPluginBase;
use Drupal\views\ResultRow;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Allows the country name to be displayed instead of the country code.
 *
 * @ingroup views_field_handlers
 *
 * @ViewsField("country_code")
 */
class CountryCode extends FieldPluginBase {

  /**
   * The country repository.
   *
   * @var \CommerceGuys\Addressing\Repository\CountryRepositoryInterface
   */
  protected $countryRepository;

  /**
   * Constructs a CountryCode object.
   *
   * @param array $configuration
   *   A configuration array containing information about the plugin instance.
   * @param string $pluginId
   *   The id of the plugin instance.
   * @param mixed $pluginDefinition
   *   The plugin implementation definition.
   * @param \CommerceGuys\Addressing\Repository\CountryRepositoryInterface $countryRepository
   *   The country repository.
   */
  public function __construct(array $configuration, $pluginId, $pluginDefinition, CountryRepositoryInterface $countryRepository) {
    parent::__construct($configuration, $pluginId, $pluginDefinition);

    $this->countryRepository = $countryRepository;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $pluginId, $pluginDefinition) {
    return new static(
      $configuration,
      $pluginId,
      $pluginDefinition,
      $container->get('address.country_repository')
    );
  }

  /**
   * {@inheritdoc}
   */
  protected function defineOptions() {
    $options = parent::defineOptions();
    $options['display_name'] = ['default' => TRUE];

    return $options;
  }

  /**
   * {@inheritdoc}
   */
  public function buildOptionsForm(&$form, FormStateInterface $form_state) {
    $form['display_name'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Display the localized country name instead of the two character country code'),
      '#default_value' => !empty($this->options['display_name']),
    ];
    parent::buildOptionsForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function render(ResultRow $values) {
    $value = $this->getValue($values);
    if (!empty($this->options['display_name']) && !empty($value)) {
      $countries = $this->countryRepository->getList();
      if (isset($countries[$value])) {
        $value = $countries[$value];
      }
    }

    return $this->sanitizeValue($value);
  }

}