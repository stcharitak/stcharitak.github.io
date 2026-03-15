#!/usr/bin/env perl
use strict;
use warnings;
use File::Spec;
use FindBin;

my $root = File::Spec->rel2abs(File::Spec->catdir($FindBin::Bin, ".."));

sub read_file {
  my ($rel) = @_;
  my $path = File::Spec->catfile($root, split('/', $rel));
  open my $fh, '<', $path or die "Cannot read $path: $!\n";
  local $/;
  my $content = <$fh>;
  close $fh;
  $content =~ s/\s+\z//;
  return $content;
}

sub write_file {
  my ($rel, $content) = @_;
  my $path = File::Spec->catfile($root, split('/', $rel));
  open my $fh, '>', $path or die "Cannot write $path: $!\n";
  print {$fh} $content;
  close $fh;
}

my $layout = read_file('src/layout.html');
my $head_partial = read_file('src/partials/head.html');
my $scripts_partial = read_file('src/partials/scripts.html');

my @pages = (
  {
    output => 'index.html',
    content => 'src/pages/index.content.html',
    active => 'about',
    extra_head => '',
    extra_scripts => '<script src="js/jquery.googlemap.js"></script>',
  },
  {
    output => 'resume.html',
    content => 'src/pages/resume.content.html',
    active => 'resume',
    extra_head => '<link rel="stylesheet" href="css/custom.css" type="text/css" />',
    extra_scripts => '',
  },
  {
    output => 'contact.html',
    content => 'src/pages/contact.content.html',
    active => 'contact',
    extra_head => '<link rel="stylesheet" href="css/custom.css" type="text/css" />',
    extra_scripts => '',
  },
);

for my $page (@pages) {
  my $head = $head_partial;
  $head =~ s/\{\{EXTRA_HEAD\}\}/$page->{extra_head}/g;

  my $scripts = $scripts_partial;
  $scripts =~ s/\{\{EXTRA_SCRIPTS\}\}/$page->{extra_scripts}/g;

  my $content = read_file($page->{content});
  my $html = $layout;
  $html =~ s/\{\{HEAD\}\}/$head/g;
  $html =~ s/\{\{PAGE_KEY\}\}/$page->{active}/g;
  $html =~ s/\{\{CONTENT\}\}/$content/g;
  $html =~ s/\{\{SCRIPTS\}\}/$scripts/g;

  write_file($page->{output}, $html . "\n");
  print "Built $page->{output}\n";
}
