<?php
/**
 * @package WordPress
 * @subpackage Timberland
 * @since Timberland 2.1.0
 */

use Timber\Timber;

$context = Timber::context();

// Get the current page/post
$timber_post     = Timber::get_post();
$context['post'] = $timber_post;

// Query for sidebar posts
$args = array(
    'post_type'      => 'post',
    'posts_per_page' => 4,
    'orderby'        => 'date',
    'order'          => 'DESC',
);

$sidebar_query = new WP_Query($args);

// Pass the query results to Timber
$context['sidebar_posts'] = Timber::get_posts($sidebar_query);

Timber::render( array( 'page-' . $timber_post->post_name . '.twig', 'page.twig' ), $context );
