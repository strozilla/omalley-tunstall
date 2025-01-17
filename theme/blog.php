<?php

// Pages Covered: Blog Index

 use Timber\Post;
 use Timber\Timber;
 use Timber\PostQuery;

$context = Timber::context();
$timber_post = new Post();
$context['post'] = $timber_post;

$args = array(
    'post_type' => 'news',
    'posts_per_page' => -1,
);


$context['posts'] = new PostQuery($args);
Timber::render('blog.twig', $context);
get_footer();
