// ----------------------------------------------------------------------------
// Copyright (c) 2014, Nicolas P. Rougier. All Rights Reserved.
// Distributed under the (new) BSD License.
// ----------------------------------------------------------------------------
#version 120

float marker(vec2 P, float size)
{
    float r1 = length(P) - size/2;
    float r2 = length(P) - size/4;
    return max(r1,-r2);
}
