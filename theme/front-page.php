<?php

// Pages Covered: Blog Index, Category Archive Pages

get_header();
$context = Timber::context();
Timber::render('front.twig', $context);
get_footer();
