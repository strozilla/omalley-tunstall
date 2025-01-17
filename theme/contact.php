<?php

// Template Name: Contact
// Pages Covered: Contact

get_header();
$context = Timber::context();
$timber_post     = Timber::get_post();
$context['post'] = $timber_post;
Timber::render('contact.twig', $context);
get_footer();
