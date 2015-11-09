<?php

/**
 * @file
 * Containes \Drupal\demo\Controller\RemoteSession
 */

namespace Drupal\demo\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\user\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;

 /**
 * Controller for demonstrating how to start a remote session.
 *
 * @ingroup demo
 */
 class RemoteSession extends ControllerBase {

   /**
   * Takes post information in order to authenticate remote sessions.
   */
   public function start() {
     \Drupal::logger('demo')->notice(print_r($_POST, true));
     $uid = \Drupal::service('user.auth')->authenticate($_POST['name'], $_POST['pass']);
     return new JsonResponse( array( 'uid' => $uid, 'name' => $_POST['name'] ) );
   }

   /**
   * End session for remote user.
   */
   public function end() {
     drupal_session_destroy_uid($_POST['uid']);
   }

   /**
   * Allow posting of information
   */
   public function formPost() {
     $output = drupal_form_submit($_POST['form_id'], $_POST['form']);
     return new JsonResponse( array( 'message' => $ouput ) );
   }

   /**
   * Check User access
   */
   public function hasAccess() {
     $account = user_load($_POST['uid']);
     return user_access($_POST['permission'], $accoun);
   }

 }
